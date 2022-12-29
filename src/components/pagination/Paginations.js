import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({ handlePrevious, handleNext, page, pageCount, setPage }) => {
  return (
    <>
      {
        pageCount > 0 ?
          <div className="pagination_div d-flex justify-content-end mx-5">
            <Pagination>
              <Pagination.Prev onClick={() => handlePrevious()} />
              {
                Array(pageCount).fill(null).map((element, index) => {
                  return (
                    <>
                      <Pagination.Item key={index} active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                    </>
                  )
                })
              }
              <Pagination.Next onClick={() => handleNext()} />
            </Pagination>
          </div> : ""
      }

    </>
  )
}

export default Paginations