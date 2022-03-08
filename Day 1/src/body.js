function table(){
    return ` 
    <img id="logo" src="./src/homeimg.jpg">

    <h1>To-Do</h1>

    <div id="inputDiv">
        
        <div class="input">
            <h3>Work</h3>
        <input type="text" id="work" placeholder="work" >
        </div>

        <div  class="input">
            <h3>Note</h3>
        <input type="text" id="note" placeholder="note" >
        </div>

        <div class="input">
            <h3>Priority</h3>
            <select id="priority">
                <option value="">-------</option>
                <option value="High">High</option>
                <option value="Mid">Mid</option>
                <option value="Low">Low</option>

            </select>

        </div>

        <button id="butt">Submit</button>

    </div>

<div id="tableDiv">
    <table id="mainTable">
        
        <thead >

            <tr>

                <th>Work</th>
                <th>Note</th>
                <th>Priority</th>
                <th>delete</th>
            </tr>


        </thead>

        <tbody>

           

        </tbody>
    </table>

</div>`
}

export default table