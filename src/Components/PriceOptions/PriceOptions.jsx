import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio equipment",
            "Access to strength training equipment",
            "Unlimited locker usage",
            "Access to group fitness classes (limited)"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "Access to cardio equipment",
            "Access to strength training equipment",
            "Unlimited locker usage",
            "Unlimited access to group fitness classes",
            "Personalized workout plans",
            "Priority booking for personal trainers"
          ]
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "price": 99.99,
          "features": [
            "Access to cardio equipment",
            "Access to strength training equipment",
            "Unlimited locker usage",
            "Unlimited access to group fitness classes",
            "Personalized workout plans",
            "Priority booking for personal trainers",
            "Access to exclusive VIP lounge",
            "Complimentary towel service",
            "Sauna and steam room access"
          ]
        }
      ];
      
     
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;