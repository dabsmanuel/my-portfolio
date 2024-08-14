import React, { useState, useEffect } from "react";

const Experience = ({ initialYears, startDate }) => {
	const [yearsExp, setYearsExp] = useState(initialYears);

	useEffect(() => {
		const newYear = () => {
      const today = new Date();
      const start = new Date( startDate);
			const currentMonth = today.getMonth();
      const currentDay = today.getDate();
      const startDay = start.getDate();
      const startMonth = start.getMonth()

      let years = today.getFullYear() - start.getFullYear();
      
      if (
        currentMonth < startMonth ||
        (currentMonth === startMonth && currentDay < startDay)
      ) {
        years--;
      }

      setYearsExp(initialYears + years);
    };
    newYear();

    const intervalid = setInterval(newYear, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalid);
  }, [startDate, initialYears]);
  
  return <span>{ yearsExp }</span>
};

export default Experience;
