import { NextPage } from 'next'
import PageLayout from '../../components/page-layout/page-layout'

const LedigTidForm: NextPage = () => {
    return (
        <PageLayout>
            
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
