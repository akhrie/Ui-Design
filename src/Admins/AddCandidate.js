
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCandidate() {
  return (
    <div className="form-container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form action="" className="forms-sample">
            <div className="form-group">
              <label htmlFor="exampleInputName1">Candidate Name<span style={{ color: 'red' }}>*</span></label>
              <input type="text" name="name" value="" className="form-control larger-input" required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputemail">Candidate Email<span style={{ color: 'red' }}>*</span></label>
              <input type="text" name="email" value="" className="form-control larger-input" required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputbirth">Date Birth<span style={{ color: 'red' }}>*</span></label>
              <input type="Date" name="Date-birth" value="" className="form-control larger-input" required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputgender">Gender<span style={{ color: 'red' }}>*</span></label>
              <select name="gender" value="" className="form-control larger-input" required={true}>
                <option value="">Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputfatherName">Father's Name<span style={{ color: 'red' }}>*</span></label>
              <input type="text" name="fathername" value="" className="form-control larger-input" required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputContact">Contact Number<span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                name="contactnumber"
                value=""
                className="form-control larger-input"
                required={true}
                maxLength="10"
                pattern="[0-9]+"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputAddress">Address<span style={{ color: 'red' }}>*</span></label>
              <textarea name="address" className="form-control larger-input" required={true}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputAdmissionDate">Admission Date<span style={{ color: 'red' }}>*</span></label>
              <input type="date" name="dateofexpiry" value="" className="form-control larger-input" required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputStudentPhoto">Student Photo<span style={{ color: 'red' }}>*</span></label>
              <input
                type="file"
                name="image"
                value=""
                className="form-control"
                required={true}
                id="dp"
              />
            </div>
            <div className="form-group text-center"> 
              <button type="submit" className="btn btn-primary btn-lg" name="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCandidate;
