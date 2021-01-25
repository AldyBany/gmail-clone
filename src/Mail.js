import './Mail.css'
import {IconButton} from '@material-ui/core'

import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PrintIcon from '@material-ui/icons/Print'
import {useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOpenMail } from './features/mailSlice'

const Mail = () => {

    const history = useHistory()
    const selectMail = useSelector(selectOpenMail)

    return ( 
        <div className="mail">
            <div className="mail__tools">
                <div className="mails__toolsLeft">
                    <IconButton onClick={()=>history.push("/")}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

                <div className="mails__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>

                    <IconButton>
                        <PrintIcon/>
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>

                </div>
            </div>

            <div className="mails__body">
                <div className="mail__bodyHeader">
                    <h2>{selectMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p>{selectMail?.title}</p>
                    <p className="mail__time">{selectMail?.time}</p>
                </div>
                <div className="mail__message">
                    <p>{selectMail?.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Mail;