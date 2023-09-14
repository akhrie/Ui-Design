import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables

function ManageAddCandidate() {
  const tableRef = useRef(null);

  useEffect(() => {
    let dataTable; // Create a variable to capture the DataTable instance

    // Wait for the component to mount and the table element to be rendered
    if (tableRef.current) {
      // Initialize DataTables
      dataTable = $(tableRef.current).DataTable();

      // To hide the table initially, you can use DataTables' "visible" option
      dataTable.column(0).visible(false); // Assuming the first column is ID

      return () => {
        // Destroy the DataTable when the component unmounts to avoid memory leaks
        if (dataTable) {
          dataTable.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="item">
      <h1 className="heading">Employees</h1>
      <div className="content-container">
        <div className="table-container">
          <div className="table-wrapper">
            <table id="example" ref={tableRef} className="table table-striped centered-table">
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Email</th>
                  <th>Date Birth</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Admission Date</th>
                  <th>Photo</th>
                  <th>Action</th>
                  <th>Active</th>
                
                </tr>
              </thead>
              <tbody>
                {/* Your table rows go here */}
                <tr>
                  <td></td>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>HR</td>
                  <td>john.doe@example.com</td>
                  <td>01/01/1990</td>
                  <td>Male</td>
                  <td>5555555555</td>
                  <td>123 Main St</td>
                  <td>2023-09-09</td>
                  <td>Photo URL</td>
                  <td>
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button type="button" className="btn btn-secondary">Delete</button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-success">Activate</button>
                  </td>
                
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAddCandidate;
