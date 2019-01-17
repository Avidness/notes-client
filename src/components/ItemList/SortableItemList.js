import React, { Fragment } from 'react';
import ItemRow from './ItemRow';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class SortableItemList extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragEnd(result) {
    // Dropped outside the list
    if (!result.destination) {
      return;
    }

    this.props.handleReorder(
      this.props.items,
      result.source.index,
      result.destination.index
    );
  }

  render(){
    let items = this.props.items;
    return (
      <Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">

            {(provided, snapshot) => (

              <div ref={provided.innerRef}>

                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>

                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ItemRow key={item.id} 
                          item={item}
                          handleItemDelete={this.props.handleItemDelete} />
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Fragment>
    );
  }
}

export default SortableItemList;