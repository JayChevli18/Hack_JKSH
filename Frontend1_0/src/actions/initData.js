export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'Upcoming',
                    cardOrder: ['card-1', 'card-2', 'card-3','card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Task 12',
                            image: "https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Task 13',
                            image: null
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Task 14',
                            image: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Task 15',
                            image: null
                        },
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Pending',
                    cardOrder: ['card-8', 'card-9', 'card-10'],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Task 9',
                            image: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Task 10',
                            image: null
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Task 11',
                            image: null
                        },
                        {
                            id: 'card-15',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 12',
                            image: null
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'In Progress',
                    cardOrder: ['card-11', 'card-12', 'card-13','card-14', 'card-15'],
                    cards: [
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 5',
                            image: null
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 6',
                            image: null
                        },
                        {
                            id: 'card-13',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 7',
                            image: null
                        },
                        {
                            id: 'card-14',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 8',
                            image: null
                        },
                    ]
                },
                {
                    id: 'column-4',
                    boardId: 'board-1',
                    title: 'Completed',
                    cardOrder: ['card-11', 'card-12', 'card-13','card-14', 'card-15'],
                    cards: [
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 1',
                            image: null
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 3',
                            image: null
                        },
                        {
                            id: 'card-13',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 4',
                            image: null
                        },
                    ]
                },
                {
                    id: 'column-5',
                    boardId: 'board-1',
                    title: 'Missed',
                    cardOrder: ['card-11', 'card-12', 'card-13','card-14', 'card-15'],
                    cards: [
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Task 2',
                            image: null
                        }
                    ]
                }
            ]
        }
        

    ]
}