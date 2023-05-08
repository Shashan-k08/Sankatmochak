import React, { useState } from 'react';

const VolunteerInfo = () => {
    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ];
    
      const [selectedOption, setSelectedOption] = useState(null);
    
      const handleSelect = (option) => {
        setSelectedOption(option);
      };
    
      return (
        <div>
          <select value={selectedOption ? selectedOption.value : ""} onChange={(e) => handleSelect(options.find(option => option.value === e.target.value))}>
            <option value="">Select an option</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {selectedOption && (
            <div>
              {selectedOption.value === "option1" && <div>Option 1 content</div>}
              {selectedOption.value === "option2" && <div>Option 2 content</div>}
              {selectedOption.value === "option3" && <div>Option 3 content</div>}
            </div>
          )}
        </div>
      );
    };
export default VolunteerInfo;