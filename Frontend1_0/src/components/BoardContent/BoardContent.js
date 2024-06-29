import './BoardContent.scss'
import Column from '../Column/Column'
import { initData } from '../../actions/initData'
import { useState, useEffect } from 'react'
import _ from 'lodash'
import { mapOrder } from '../../utilities/sorts'
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from '../../utilities/dragDrop'
import 'font-awesome/css/font-awesome.min.css';


const BoardContent = function () {

    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardInitData = initData.boards.find(item => item.id === 'board-1');
        if (boardInitData) {
            setBoard(boardInitData);

            setColumns(mapOrder( boardInitData.columns, boardInitData.columnOrder, 'id'))
        }
    }, []);

    const onColumnDrop = (dropResult) => {
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult);

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(column => column.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);
    }

    const onCardDrop = (dropResult, columnId) => {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            let newColumns = [...columns];
            let currentColumn = newColumns.find(column => column.id === columnId);
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
            currentColumn.cardOrder = currentColumn.cards.map(card => card.id)
            // console.log("inside craddrop", dropResult)
            setColumns(newColumns);
        }
    }

    if (_.isEmpty(board)) {
        return (
            <>
                <div className='not-found'>Board not found</div>
            </>
        )
    }

    return (
        <>
            <div className="board-columns">
            <Container
                orientation="horizontal"
                    onDrop={onColumnDrop}
                    getChildPayload={index => columns[index]}
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'column-drop-preview'
                }}
            >

                {columns && columns.length > 0 && columns.map((column) => {
                    return (
                        <Draggable key={column.id}>
                        <Column
                                column={column}
                                onCardDrop={onCardDrop}
                            />
                        </Draggable>
                    )
                })}
            </Container>
            {/* <Column /> */}

        </div>
        </>
    )
}

export default BoardContent;