import React from 'react';

function Repo({ repos }) {
  return (
    <div className='repoContainer'>
      {repos &&
        repos.map((_repo) => (
          <div className='repoWrapper' key={_repo.id}>

            <a href={_repo.html_url} >Click to visit the Repo</a>

            <div className='avatarContainer'>
              <img className='avatar' src={_repo.owner.avatar_url} />
            </div>

            <div className='repoInfos'>
              <h2 className='username'>{_repo.name}</h2>

              <p className='description'>
                {_repo.description ? _repo.description.substring(0, 80) : null}
                .....
              </p>

              <div className='spanContainer'>
                <span className='spanCss'>Stars : {_repo.stargazers_count} </span>
                <span className='spanCss'>Issues : {_repo.open_issues}</span>
              </div>

              <p>Submitted 30 days ago by <span className="userName">{_repo.owner.login}</span></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Repo