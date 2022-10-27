import { NextPage } from 'next'
import PageLayout from '../../components/page-layout/page-layout'
import VacantForm from '../../components/vacant-form/vacant-form';

interface Props {
}

const LedigTidForm: NextPage<Props> = ({
    
}) => {
    return (
        <PageLayout title="Ledig tid">
            <h2>Meld inn ledig tid</h2>
            <VacantForm/>
        </PageLayout>
    )
}

export default LedigTidForm
