import UserCard from "../components/UserCard";

function Dashboard({ user }) {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <p className="dashboard__subtitle">
        HOC ile ayrıştırılmış sorumluluklara sahip bir örnek.
      </p>
      <UserCard user={user} />
    </section>
  );
}

export default Dashboard;
