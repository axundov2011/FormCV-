import { useState } from 'react'
import { useFormik } from 'formik'
import './Forms.css'

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  imageUrl: '',
  experience: '',
  cvFile: null,
}

const validate = (values) => {
  const errors = {}
  const nameRegex = /^[\p{L}\s]{3,60}$/u
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  const phoneRegex = /^\+?[0-9\s()-]{7,20}$/
  const urlRegex = /^(https?:\/\/).+/i

  if (!nameRegex.test(values.fullName.trim())) {
    errors.fullName = 'Enter a valid full name.'
  }
  if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (values.imageUrl && !urlRegex.test(values.imageUrl.trim())) {
    errors.imageUrl = 'Use a valid image URL starting with http:// or https://.'
  }
  if (!values.experience.trim()) {
    errors.experience = 'Enter your experience.'
  }
  if (!values.cvFile) {
    errors.cvFile = 'Upload a CV file.'
  }

  return errors
}

const Forms = () => {
  const [cvs, setCvs] = useState([])
  const [selectedCv, setSelectedCv] = useState(null)
  

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, { resetForm }) => {
      const newCv = {
        ...values,
        id: crypto.randomUUID(),
        cvFileName: values.cvFile.name,
        cvFileUrl: URL.createObjectURL(values.cvFile),
      }

      setCvs((currentCvs) => [...currentCvs, newCv])
      setSelectedCv(newCv)
      resetForm()
    },
  })

  const handleRemoveCv = (id) => {
    setCvs((currentCvs) => {
      const cvToRemove = currentCvs.find((cv) => cv.id === id)
      if (cvToRemove) {
        URL.revokeObjectURL(cvToRemove.cvFileUrl)
      }

      return currentCvs.filter((cv) => cv.id !== id)
    })
    setSelectedCv((currentCv) => (currentCv?.id === id ? null : currentCv))
  }

  const handleShowCv = (cv) => {
    setSelectedCv(cv)
    window.open(cv.cvFileUrl, '_blank', 'noopener,noreferrer')
  }

  const showError = (field) => formik.touched[field] && formik.errors[field]
  console.log('Imgae URL:', formik.values.imageUrl)

  return (
    <main className="cv-page">
      <section className="cv-layout">
        <div className="cv-card">
          <div className="cv-card__header">
            <h1>CV Form</h1>
            <p>Create a professional CV profile</p>
          </div>

          <form className="cv-form" onSubmit={formik.handleSubmit} noValidate>
            {[
              ['fullName', 'Full Name', 'text'],
              ['email', 'Email', 'email'],
              ['phone', 'Phone', 'tel'],
              ['imageUrl', 'Image URL', 'url'],
            ].map(([name, placeholder, type]) => (
              <div className="cv-form__field" key={name}>
                <input
                  className={showError(name) ? 'cv-form__input cv-form__input--error' : 'cv-form__input'}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formik.values[name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {showError(name) && <span className="cv-form__error">{formik.errors[name]}</span>}
              </div>
            ))}

            <div className="cv-form__field">
              <textarea
                className={showError('experience') ? 'cv-form__textarea cv-form__input--error' : 'cv-form__textarea'}
                name="experience"
                placeholder="Experience"
                value={formik.values.experience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {showError('experience') && <span className="cv-form__error">{formik.errors.experience}</span>}
            </div>

            <div className="cv-form__field">
              <label className="cv-form__file-label" htmlFor="cvFile">Upload CV</label>
              <input
                className="cv-form__file"
                id="cvFile"
                name="cvFile"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(event) => formik.setFieldValue('cvFile', event.currentTarget.files[0] || null)}
                onBlur={formik.handleBlur}
                reset={formik.handleReset}
              />
              {formik.values.cvFile && (
                <div className="cv-form__file-preview">
                  Selected CV: {formik.values.cvFile.name}
                </div>
              )}
              {showError('cvFile') && <span className="cv-form__error">{formik.errors.cvFile}</span>}
            </div>

            <button className="cv-form__submit" type="submit">Create CV</button>
          </form>
        </div>

        <aside className="cv-preview">
          {selectedCv ? (
            <>
              <div className="cv-preview__top">
                {selectedCv.imageUrl ? (
                  <img src={selectedCv.imageUrl} alt={selectedCv.fullName} className="cv-preview__image" />
                ) : (
                  <div className="cv-preview__avatar">{selectedCv.fullName.charAt(0)}</div>
                )}
                <div>
                  <h2>{selectedCv.fullName}</h2>
                  <p>{selectedCv.email}</p>
                  <p>{selectedCv.phone}</p>
                </div>
              </div>
              <h3>Experience</h3>
              <p>{selectedCv.experience}</p>
              <div className="cv-preview__file">CV: {selectedCv.cvFileName}</div>
            </>
          ) : (
            <div className="cv-preview__empty">
              <h2>CV Preview</h2>
              <p>Your created CV will appear here.</p>
            </div>
          )}
        </aside>
      </section>

      <section className="cv-table-card">
        <h2>Created CVs</h2>
        <div className="cv-table-wrapper">
          <table className="cv-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>CV File</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cvs.length === 0 ? (
                <tr><td className="cv-table__empty" colSpan="5">No CVs created yet.</td></tr>
              ) : cvs.map((cv) => (
                <tr key={cv.id}>
                  <td>{cv.fullName}</td>
                  <td>{cv.email}</td>
                  <td>{cv.phone}</td>
                  <td>{cv.cvFileName}</td>
                  <td className="cv-table__actions">
                    <button className="cv-table__show" type="button" onClick={() => handleShowCv(cv)}>Show CV</button>
                    <button className="cv-table__delete" type="button" onClick={() => handleRemoveCv(cv.id)}>Delete CV</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Forms
