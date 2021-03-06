import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './navigation/NavBar';
import Header from './navigation/Header';
import Footer from './navigation/Footer';
import FormBuilderContainer from '../containers/FormBuilderContainer';
import FormViewerContainer from '../containers/FormViewerContainer';
import HomePage from './HomePage'
import FormSubmissionsContainer from '../containers/FormSubmissionsContainer';



function App() {
  const [forms, setForms] = useState([])
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/forms")
      .then(r => r.json())
      .then(fetchedQuestions => setForms(fetchedQuestions))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/submissions")
      .then(r => r.json())
      .then(fetchedSubmissions => setSubmissions(fetchedSubmissions))
  }, [])

  const handleNewSubmissions = (newSubmission) => {
    console.log("new submission", newSubmission)
    setSubmissions([...submissions, newSubmission])

    console.log(newSubmission)
  }

  const handleDeleteSubmission = (id) => {
    const filteredSubmissions = submissions.filter(submission => submission.id !== id)

    setSubmissions(filteredSubmissions)

  }

  const handleAddForm = (newForm) => {
    setForms([...forms, newForm])
  }

  const handleDeleteForm = (id) => {
    const filteredForms = forms.filter(form => form.id !== id)

    setForms(filteredForms)
  }


  // console.log("All submissions:", submissions)

  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />

        <Switch>
          <Route path="/forms/new">
            <FormBuilderContainer onAddForm={handleAddForm} />
          </Route>

          <Route path="/forms">
            <FormViewerContainer forms={forms} onNewSubmissions={handleNewSubmissions} onDeleteForm={handleDeleteForm} />
          </Route>

          <Route path="/submissions">
            <FormSubmissionsContainer submissions={submissions} forms={forms} onDeleteSubmission={handleDeleteSubmission} />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="*">
            <h3>404 Page Not Found</h3>
          </Route>

        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
