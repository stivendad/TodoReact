import './CreateTodoButton.css'

const CreateTodoButton = ({setOpenModal}) => {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  };

  return (
    <button 
      className='CreateTodoButton'
      onClick={onClickButton}  
    >
      +
    </button>
  )
}

export default CreateTodoButton