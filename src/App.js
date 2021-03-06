import React, { useState } from 'react'

const readingList = [
  {
    title: 'Title1',
    author: 'Author1',
    startDate: new Date('2022-02-01'),
    isDone: false,
    endDate: new Date(''),
    notes: ''
  },
  {
    title: 'Title2',
    author: 'Author2',
    startDate: new Date('2021-09-23'),
    isDone: true,
    endDate: new Date('2021-11-09'),
    notes: 'It is good, loved it'
  },
  {
    title: 'Title3',
    author: 'Author3',
    startDate: new Date('2020-05-11'),
    isDone: false,
    endDate: new Date('2021-01-22'),
    notes: 'Boring'
  }
]

const App = () => {

  return (
    <>
      <CurrentlyReading />
    </>
  )
}

const CurrentlyReading = () => {
  // hook for title, author, start_date, isDone, end_date, notes
  const [curBook, setCurBook] = useState(readingList[0])

  const startDateStr = curBook.startDate.toISOString().split('T')[0]
  let endDateStr = !isNaN(curBook.endDate) ? curBook.endDate.toISOString().split('T')[0] : ''
  const endDateHandler = (event) => {
    setCurBook({
      ...curBook, endDate: new Date(event.target.value)
    })
    endDateStr = event.target.value
  }

  // need to add textbox area, score, page length, submit button (need to learn how to use a form)
  // then we're creating reading list right below it
    // bottom of the list is add button
    // based on whether curBook is empty, we must add a button next to each list element to update the current book
  // then we're creating the books that we finished and a button to show all the extra details
  return (
    <div>
      <p>Currently Reading: {curBook.title} by {curBook.author}</p>
      <p>
        {startDateStr} - <input type='date' value={endDateStr} onChange={endDateHandler} min={startDateStr} max={new Date().toISOString().split('T')[0]}/>
      </p>
    </div>
  )
}

// a heatmap of the pages read on that day - maybe as a last feature once everything (EVERYTHING) else is done
export default App;
