  
import React from "react";





class List extends React.Component {
  render() {
    return (
      <div>
        <h3>List</h3>
         <ul>
            {this.props.items.map((items,index) => {
                return(
                    <li key={index}>
                        {`name : ${items.name}`}<br/>{`price : ${items.price} €`}
                    </li>
                    )
                    })}
          </ul>
        
      </div>
    );
  }

}

export default List;