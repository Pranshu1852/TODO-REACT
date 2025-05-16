function TodoDetailPage() {
  return (
    <div className="flex flex-col gap-10 border-2 border-black rounded-lg p-10 bg-todo-60 bg-cover text-black">
      <h2 className="text-3xl font-bold font-[Tagesschrift]">Todo Title</h2>
      <div className="flex flex-row gap-2 justify-between text-sm md:text-base font-medium">
        <p>
          Priority: <span>High</span>
        </p>
        <p>
          Status: <span>Status</span>
        </p>
        <p>
          Created at: <span>14/05/2025</span>
        </p>
      </div>
      <p className="text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
        possimus delectus harum distinctio ab atque dolorem iste natus quae
        numquam nemo omnis magnam earum aut consectetur, quas maiores,
        recusandae quisquam. Consequatur esse accusamus id, quam necessitatibus
        ex blanditiis enim molestiae unde dolores mollitia perspiciatis alias
        nulla nostrum. Adipisci voluptatibus provident dolorem ratione veritatis
        autem quasi vel, doloribus minima dolore reiciendis. Qui, enim, dolore
        harum corporis .
      </p>
      <div className="flex flex-row gap-5 justify-between">
        <button className="text-lg font-semibold py-2 px-4 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all">
          Edit
        </button>
        <button className="text-lg font-semibold py-2 px-4 border-2 border-black rounded-lg bg-black text-white hover:bg-transparent hover:text-black transition-all">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoDetailPage;
