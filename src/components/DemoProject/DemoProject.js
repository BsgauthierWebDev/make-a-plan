import React, {Component} from 'react';

class DemoProject extends Component {
    render() {
        return (
            <div className = 'DemoProject'>
                <div className = 'DemoProject__title'>
                    <h2>Homemade Espresso</h2>
                </div>
                <div className = 'DemoProject__description'>
                    <h3>Project Details</h3>
                    <p>Make the best coffee you can at home to start your morning in the best way. 
                        Make espresso right on your stovetop for a rich, velvety cup of coffee with a real caffeine kick!
                    </p>
                </div>
                <div className = 'DemoProject__materials'>
                    <h3>Required Materials:</h3>
                    <ul>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                                Fresh coffee beans
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Coffee grinder (for best results, use a grinder with a conical burr)
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            An airtight container for any leftover grounds
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />Moka pot stovetop espresso maker
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Spoon
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Stovetop, hot plate or another heat source that will support your coffee pot
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Your favorite coffee mug
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Your preferred coffee additions, such as cream and sugar. Or try it black; 
                            you'll be surprised how rich and smooth the flavor is!
                        </li>
                    </ul>
                </div>
                <div className = 'DemoProject__instructions'>
                    <h3>Instructions:</h3>
                    <ol>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Set your coffee grinder at a fine grind; you want an almost powder consistency to the grinds
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Pour your beans into the grinder's hopper and proceed to grind, per the instructions.
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Separate the moka pot into its three separate components; water reservoir, filter basket and top chamber
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Fill the water reservoir (lower chamber) with clean, fresh water until just below the safety valve. 
                            Be sure not to cover the valve, as it may cause a safety issue with pressure inside the chamber.
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />Spoon your ground coffee into the filter basket until it is full. 
                            Smooth the grounds level with the top of the basket and run your finger around the edge to make sure there 
                            isn't any debris, which would prevent a good seal from forming.
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />Place the filled filter basket in the bottom chamber of the pot, then screw the top chamber 
                            onto the the bottom, making sure everything is tight and sealed.
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />Put the pot on the stovetop or hot plate, making sure the handle isn't over the heat source. 
                            (The handles are generally plastic, and you don't want any issues with melting.) 
                            Open the lid so you can see when the coffee begins to rise through the chimney.
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Turn on the heat to medium low. This will allow the water to heat evenly and help prevent the grounds from scorching.
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            As the brewing process completes, the chimney valve will start to sputter. Close the pot's lid and turn off the heat.
                        </li>
                        <li>
                            <input
                                type = 'checkbox'
                                // checked = {isChecked}
                                onChange = {this.toggleCheckboxChange}
                            />
                            Once the sputtering subsides, the coffee is ready! Pour it into your mug of choice, add any extras you would like, 
                            and enjoy some of the best coffee you've ever made!
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default DemoProject;