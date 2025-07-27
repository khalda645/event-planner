import { Link } from 'react-router-dom';

//navigation to the pages: dashboard, add event and help
function NavigationHeader() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
      <Link to="/manage-events" style={{ marginRight: "10px" }}>Manage Events</Link>
      <Link to="/help">Help</Link>
    </nav>
  );
}

export default NavigationHeader;