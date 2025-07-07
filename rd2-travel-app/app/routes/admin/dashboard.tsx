import { Header, StatesCard, TripsCard } from "components"
import { dashboardStats,user, allTrips } from "~/constants";


const dashboard = () => {


  const { totalUsers, userJoined, totalTrips, tripsCreated, userRole} = dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header 

      title={`Welcome ${user?.name ?? 'Guest '}`}
      description="Track activity, trends and popular destination in real time"
      
      />


      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"></div>
      </section>
      <StatesCard
      headerTitle="Active Users Today"
      total={totalUsers}
      currentMonthCount={userJoined.currentMonth}
      lastMonthCount={userJoined.lastMonth}
      />

      <StatesCard
      headerTitle="Total Trips"
      total={totalTrips}
      currentMonthCount={tripsCreated.currentMonth}
      lastMonthCount={tripsCreated.lastMonth}
      />

      <StatesCard
      headerTitle="Total Users"
      total={userRole.total}
      currentMonthCount={userRole.currentMonth}
      lastMonthCount={userRole.lastMonth}
      />
<section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
            <TripsCard 
              key={id}
              id={id.toString()}
              name={name}
              imageUrl={imageUrls?.[0] || ''}
              location={itinerary?.[0]?.location || ''}
              tags={tags}
              price={estimatedPrice}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default dashboard
