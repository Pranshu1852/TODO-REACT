function Todo() {
  return (
    <div className="flex flex-col gap-5 border-2 border-black p-5 rounded-lg bg-todo bg-cover">
      <h3>Todo Title</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero
        eaque possimus? Accusantium facere aspernatur vero iusto cumque iste
        corporis, laboriosam similique, omnis nam quas quam eos officia ratione
        aut?
      </p>
      <div className="flex flex-row gap-2 justify-between">
        <p>
          Priority: <span>High</span>
        </p>
        <p>
          Status: <span>Not Started</span>
        </p>
        <p>
          Created at: <span>14/05/2025</span>
        </p>
      </div>
    </div>
  );
}

export default Todo;
