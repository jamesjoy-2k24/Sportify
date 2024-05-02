import "./dashboard.css";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="second-content">
        <p>
          <span>100</span>
          Total Sponsors
        </p>
        <p>
          <span>300</span>
          Total Sportsmen
        </p>
        <p>
          <span>15000LKR</span>
          Revenue
        </p>
      </div>
      <div className="third-content">
        <table>
          <thead>
            <tr>
              <th>
                Name <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </th>
              <th>
                Company/ Club <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </th>
              <th>
                Location <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </th>
              <th>
                Position <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joy</td>
              <td>Growth Agent PLC</td>
              <td>Vavuniya</td>
              <td>Sponsor</td>
              <td>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </td>
              <td>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>James</td>
              <td>Sports Club Jeeva</td>
              <td>Vavuniya</td>
              <td>Player</td>
              <td>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </td>
              <td>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>Joy</td>
              <td>Growth Agent PLC</td>
              <td>Vavuniya</td>
              <td>Sponsor</td>
              <td>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </td>
              <td>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>James</td>
              <td>Sports Club Jeeva</td>
              <td>Vavuniya</td>
              <td>Player</td>
              <td>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </td>
              <td>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>Joy</td>
              <td>Growth Agent PLC</td>
              <td>Vavuniya</td>
              <td>Sponsor</td>
              <td>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </td>
              <td>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>James</td>
              <td>Sports Club Jeeva</td>
              <td>Vavuniya</td>
              <td>Player</td>
              <td>
                <i class="fa fa-edit" aria-hidden="true"></i>
              </td>
              <td>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="fourth-content">
        <p className="page">Previous</p>
        <p>page 1 of 10</p>
        <p className="page">Next</p>
      </div>
    </div>
  );
}
