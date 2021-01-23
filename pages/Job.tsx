import Layout from '../Layout/Layout';
import styled from 'styled-components';
import Button from '../Layout/Button';
const Job = () => {
    return (
        <Layout>
            <div className="container">
            <Main>
            <JobHeader>
                <h1>Lorem, ipsum.</h1>
                <Button value='APPLY' to='/' arrow/>
            </JobHeader>
            <div style={{height : '16px'}}></div>
            <City>Berlin</City>
            <div style={{height : '48px'}}></div>

            <Italic>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.    
            </Italic>            
            <div style={{height : '48px'}}></div>
            <h1 style={{textAlign : 'left'}}>WHY WE NEED YOU</h1>
            <div style={{height : '8px'}}></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod gravida lacinia nunc mi. Ipsum in urna, placerat tincidunt tristique quam. Pharetra mauris ante ut erat maecenas egestas sed rutrum id. In aliquam dictum arcu at nisi. Cras ut integer sed arcu. Tortor volutpat consequat vestibulum adipiscing facilisis. Sed proin massa sed faucibus. Donec elementum iaculis aliquam consequat morbi eu. Tempus pellentesque sapien penatibus lacus diam odio tincidunt.
<br/>
Mauris luctus aliquet pharetra sapien non curabitur egestas magnis. Pulvinar sed interdum scelerisque ultrices nam egestas eget. Metus amet quam blandit augue viverra sed integer. Lectus magna nulla eu at metus, vitae. Nibh vestibulum facilisi orci in sed ut. Sit at sagittis sit cursus mattis nunc ut amet maecenas.</p>
            <div style={{height : '72px'}}></div>
                <Header style={{textAlign : 'left'}}>WHAT YOU'LL DO</Header>
            <div style={{height : '8px'}}></div>
            <ul>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               
            </ul>
            <div style={{height : '48px'}}></div>
            <Header style={{textAlign : 'left'}}>WHAT YOU'LL DO</Header>
            <div style={{height : '8px'}}></div>
            <ul>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               
            </ul>
            <div style={{height : '96px'}}></div>
            <ContactForm>
                    <Grid2>
                        <input type="text" name="name" id="name" placeholder="NAME"/>
                        <input type="text" name="surname" id="surname" placeholder="SURNAME"/>
                    </Grid2>
            <div style={{height : '24px'}}></div>
            <UploadComp>
                <input type="file" name="upload" id="upload"/>
            </UploadComp>
            </ContactForm>

            </Main>
            </div>
        </Layout>
    );
}

export default Job;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top : 200px;
  h1{
    //styleName: H3;
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0px;
    text-align: left;
    text-transform: uppercase;
;
  }
  .container{
      p{
          
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0px;
        text-align: left;
        color: #C6C7C8;
        max-width: 756px;
        width: 100%;

      }
  }
`;

const City = styled.p`
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        color: #C6C7C8;
`;

const Italic = styled.p`
font-size: 16px;
font-style: italic;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
width: 100%;
max-width: 756px;
`;

const Main = styled.div`
max-width: 756px;
width: 100%;
line-height: 24px;
margin-left: auto;
margin-right: auto;
h1{
    font-family: Lato;
font-style: normal;
font-weight: 900;
font-size: 26px!important;
line-height: 32px;
}
p{
        
}
ul{
        list-style: none;

        li{
            position: relative;
            margin-left: 15px;
            &::before{
                position: absolute;
                content: '';
                z-index : 1;
                left: -14px;
                transform: translateY(-50%);
                top: 50%;
                background: #EB7700;
                width : 5px;
                height: 5px;
                border-radius: 50%;

            }
        }
    }
    

  
`;
const ContactForm = styled.form`
display : flex;
flex-direction : column;
.input,.textarea{
    padding-left : 40px;
    line-height : 48px;
    border-radius : 50px;
    outline : none;
    border: 1px solid #008440;
    color: #008440;
    box-sizing: border-box;
    border-radius: 32px;
}
.input::placeholder , .textarea::placeholder{
    
    color: #CCE6D9;
}

`;

const Grid2 = styled.div`
width : 100%;
line-height : 48px;
display : grid;
grid-template-columns : repeat(2,1fr)  ;

gap : 32px;
color: #008440;
    
`;
const Header = styled.h1`
  font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 32px;
text-align: left;
`;

const UploadComp = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  input{
    width: 100%;
    max-width: 148px;
    background : $orange;
    &::-webkit-file-upload-button{
        visibility: hidden;
    }
  }
`;