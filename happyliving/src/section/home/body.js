import React from 'react'

function Body() {
    return (
        <div class="Container">Body
            <div>
                Select State : 
                <select>
                    <option>Gujarat</option>
                </select>
            </div>
            <div>
                Select City : 
                <select>
                    <option>Ahmedabad</option>
                </select>
            </div>
            <div>
                <button class="button button-sm-none">Seach Property</button>
            </div>
        </div>
    )
}

export default Body