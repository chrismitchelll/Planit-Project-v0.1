import React, { Component } from "react";
import "./tips.scss";

export default class Tips extends Component {
  render() {
    return (
      <>
        <div className="section-header">
          <h3>Budgeting Tips</h3>
        </div>
        <div className="content-wrapper budget-links__wrapper">
          <div className="budget-overview">
            <div className="budget-overview__summary">
              <h2>Budget Tips</h2>
              <h4>1. Come up with a plan</h4>
              Travelling spontaneously is great, if you have the luxury of time
              and money to spare. But if you’re travelling on a budget, the
              first thing to do is come up with a plan. You don’t have need a
              tight, hour-by-hour itinerary, but you should at least have an
              idea of how long you’ll be spending in each city or country, and
              know the route that your epic adventure will take. Leaving less to
              chance means less unexpected spends; last-minute flights and
              accommodation are often far more expensive.
              <h4>2. Travel out of season </h4>Avoid trips during the school
              holidays, this is when the travel industry hikes up prices to take
              advantage of families who can only travel during these weeks.
              Research the best time to visit your intended destination, and
              then travel just before or after these dates. This is called the
              ‘shoulder season’, where you’ll still have a great trip but maybe
              the sun won’t shine quite as brightly (and, on the plus side, it
              won’t be quite as hot.) Hotels and airlines lower their prices to
              attract customers during this time.
              <h4>3. Be accommodation-savvy</h4> Trade expensive hotel suites
              for dorm rooms in hostels. Sharing a room naturally divides the
              costs and communal bunk rooms offer the opportunity to meet people
              who might be keen to explore with you. Other great alternatives
              are websites like AirBnB and Couchsurfing, where you simply book a
              spare room in a local person’s house or apartment. It’ll halve the
              price and allow you an authentic snapshot of real life in the
              city. Consider your host your very own, personal tour guide,
              filled with insider-tips for the best eateries and tourist spots
              in that neighbourhood. You could even stay with family or friends.
              Reach out to people you know or plan a trip to somewhere that a
              long-lost cousin or school friend now lives – this could take you
              to visit places you’d never have thought of before.
              <h4>4. Pack properly </h4>Make sure you bring everything you need
              so that you don’t have to shop while you’re away (apart from a few
              souvenirs). No matter where you’re heading, take at least one pair
              of long jeans, warm hoodie and waterproof jacket for unpredictable
              weather incidents. For some in-depth advice, check out our ‘Travel
              like a pro’ guide to packing for every kind of trip.
              <h4> 5. Book flights in advance…</h4>
              Especially return flights; running out of money abroad without a
              guaranteed ticket home is never ideal. Airlines ‘release’ their
              flight seats up to a year in advance and the closer you get to
              your departure date, the more the prices increase, especially in
              the last month. <h4>6. …and be smart about how you fly</h4> Opt to
              travel on a Tuesday. Midweek travel prices are lower as a premium
              is added to weekend flights and you’ll breeze through shorter
              queues at airport check-in desks and security. Fly economy too –
              there’s no need to upgrade, no matter how nice Business Class
              looks. The money you save on cheap seats can be spent on food or
              accommodation when you arrive. Low-cost, budget airlines are fine
              for short flights and regularly have cheap deals. If you’re
              planning a weekend trip try to pack light and use only hand
              luggage, saving yourself a bit of money on hold luggage. Learn one
              of 10 languages in over 50 top cities Learn more{" "}
              <h4>7. Embrace public transport </h4>Buses and trains are cheaper
              than planes. It’s that simple! A journey on an overnight train
              also mean you have one less night in a hostel to pay for…{" "}
              <h4>8. Don’t eat away your cash</h4>
              Cheap lunches can be bought in a supermarket or even a local fresh
              food market, rather than in an overpriced cafe or restaurant. Aim
              to wander around before choosing a place to eat dinner too; if you
              just pick the first restaurant you see you won’t know if you’re
              overspending.
            </div>
            <div className="infocard-newslink__wrapper">
              <div className="card-newslink">
                <span className="title">
                  <h4>Name of Country</h4>
                </span>
                <span className="value">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="card-newslink">
                <span className="title">
                  <h4>Name of Country</h4>
                </span>
                <span className="value">Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="card-newslink">
                <span className="title">
                  <h4>Name of Country</h4>
                </span>
                <span className="value">Lorem ipsum dolor sit amet.</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </>
    );
  }
}
