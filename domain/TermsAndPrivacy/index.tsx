import ArticlesPage from "../../components/templates/ArticlesPage/ArticlesPage"
import PrivacyProtection from "./PrivacyProtection"
import InformationHandling from "./PrivacyProtection/InformationHandling"
import PersonalInformation from "./PrivacyProtection/PersonalIformation"
import PurposeAndAuthority from "./PrivacyProtection/PurposeAndAuthority"
import TermsAndConditions from "./TermsAndConditions"
import Attendance from "./TermsAndConditions/Attendance"
import HealthServicesOps from "./TermsAndConditions/HealthServicesOps"
import Payment from "./TermsAndConditions/Payment"
import TermsOfUse from "./TermsAndConditions/TermsOfUse"


const TermsAndPrivacyPage = () =>
    <ArticlesPage pageTitle="Skilmálar og persónuvernd">
        <TermsAndConditions>
            <TermsOfUse />
            <Attendance />
            <Payment />
            <HealthServicesOps />
        </TermsAndConditions>
        <PrivacyProtection>
            <PersonalInformation />
            <InformationHandling />
            <PurposeAndAuthority />
        </PrivacyProtection>
    </ArticlesPage>
    



export default TermsAndPrivacyPage