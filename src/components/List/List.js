const List = () => {
  return (
    <div className="list">
      <header className="header">
        <h2 className="title">Things to do <span>soon</span></h2>
      </header>
      <p className="description">Intresting things I want to chek out!</p>
      <section className="colums">
        <article>
          <h2>Books</h2>
        </article>
        <article>
          <h2>Movies</h2>
        </article>
        <article>
          <h2>Games</h2>
        </article>
      </section>
    </div>
  );
};
export default List;