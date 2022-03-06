const Youtube = ({id}) => {
  return (
    <div className="relative pb-[56.25%] h-[320px] overflow-hidden min-w-[100px] w-full max-w-[672px] my-0 ">
        <iframe 
            src={`https://www.youtube.com/embed/${id}`} 
            allow="autoplay; encrypted-media"
            title="Embedded Youtube video"
            className="w-full h-[320px] border-0"
        />
    </div>
  )
}

export default Youtube

