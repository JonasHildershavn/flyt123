import { NextPage } from 'next'
import PageLayout from '../../components/page-layout/page-layout'


interface Props {
}

const LedigTidForm: NextPage<Props> = ({
    
}) => {
    
    return (
        <PageLayout title="Ledig tid">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </PageLayout>
    )
}


export default LedigTidForm
