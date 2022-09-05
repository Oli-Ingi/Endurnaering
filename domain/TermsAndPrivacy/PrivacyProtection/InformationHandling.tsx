import Text from "../../../components/elements/Text/Text";
import ArticleSection from "../../../components/modules/ArticleSections/ArticleSection/ArticleSection";
import Section from '../../../components/modules/Section/Section'


const InformationHandling = () =>
    <ArticleSection title="Meðhöndlun á persónugögnum">
        <Text>
            Endurnæring ehf. notar persónugögn þín eingöngu í þeim tilgangi að efna samning við þig um veitingu 
            næringarmeðferða og til að uppfylla lagaskyldu veitanda heilbrigðisþjónustu að halda sjúkraskrá um meðferðina.
        </Text>
        <Text>
            Samkvæmt lögum um sjúkraskrár nr.55/2009 er óheimilt að eyða upplýsingum úr sjúkraskrá nema með samþykki landlæknis. 
            Aðrar upplýsingar sem við geymum um þig eru geymdar eins lengi og nauðsyn ber til í þeim tilgangi sem þeirra var aflað. 
            Einstaka upplýsingar geta verið geymdar lengur ef sérstakar reglur gilda t.d. skatta- eða bókhaldslög.
        </Text>
        <Text>
            Endurnæring ehf notast við Köru til að safna og geyma persónugögn. Persónugreinanlegar upplýsingar, ásamt öðrum gögnum, 
            eru dulkóðaðar í gagnagrunni með 256 bita dulkóðun.
            Öll samskipti milli skjólstæðings og sérfræðings innan Köru eru dulkóðuð með SSL/TLS skírteini.
        </Text>
    </ArticleSection>



export default InformationHandling