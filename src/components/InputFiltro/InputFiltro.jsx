export const InputFiltro = ({ search, setSearch }) => {
    return (
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-10 mx-auto p-2 border border-gray-300 rounded"
      />
    )
}


