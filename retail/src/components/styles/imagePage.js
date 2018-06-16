//import Background from "../../img/myBackground.jpg"

export const styles = theme => ({
    myText: {
      margin: theme.spacing.unit,
      maxWidth: '70%'
    },
    myBackground: {
      backgroundImage: `black`,
      textAlign: 'center',
      color: 'white',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      maxHeigth: '900px'
    },
    introText: {
      paddingTop: '300px',
      paddingBottom: '200px',
    },
    welcomeText: {
      color: 'black',
      fontSize: '40px'
    },
    findText: {
      color: 'black',
      fontSize: '60px'
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
});