/* eslint-disable react/prop-types */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pagination = ({
  itemsPerPage,
  totalPosts,
  paginate,
  path,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  let iPage;
  const prev = currentPage - 1;
  const next = currentPage + 1;
  return (
    <ul className="pagination justify-content-end mt-3">
      {currentPage > 1 ? (
        <li className="page-item">
          <NavLink
            className="page-link"
            to={path + prev}
            onClick={() => paginate(prev)}
            activeClassName="active"
            style={{ backgroundColor: '#1ca48c', color: '#f2f2f2' }}
          >
            <FontAwesomeIcon icon={['fas', 'caret-left']} />
            <FontAwesomeIcon icon={['fas', 'caret-left']} />
          </NavLink>
        </li>
      ) : null}
      {pageNumbers.map((number) => {
        iPage = number;
        return (
          <li key={number} className="page-item">
            <NavLink
              to={path + number}
              className="page-link"
              onClick={() => paginate(number)}
              activeClassName="active"
            >
              {number}
            </NavLink>
          </li>
        );
      })}
      {iPage - 1 >= currentPage ? (
        <li className="page-item">
          <NavLink
            className="page-link"
            to={path + next}
            onClick={() => paginate(next)}
            activeClassName="active"
            style={{ backgroundColor: '#1ca48c', color: '#f2f2f2' }}
          >
            <FontAwesomeIcon icon={['fas', 'caret-right']} />
            <FontAwesomeIcon icon={['fas', 'caret-right']} />
          </NavLink>
        </li>
      ) : null}
    </ul>
  );
};

export default Pagination;
