
import './Manage.scss'
import Form from '../Form/Form'

const Below = () => {
  return (
    <div className='below-container'>
        <div className='below-inner'>
            <div className='heading'>
                <p className='line'>
                    Manage your travel and expenses the smart way!
                </p>
            </div>
            <div>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Below