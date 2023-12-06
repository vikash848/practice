import React from 'react'
import styled from 'styled-components'
import Watermark from 'react-awesome-watermark';


const WatermarkWrapper = styled.div`
text-align: center;

.space-props-test {
  display: inline-block;
  margin: 10px;
}
`;

const StyledWatermark = styled(Watermark)`
margin: 0 auto;

.inner-watermark {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  font-size: 20px;
  text-align: center;
  line-height: 2;
}
`;

const WatermarkPdf = () => {

  

  return (
    <div>

<h2>Watermark</h2>
<Watermark
        text="Watermark Rendering"
        style={{
          width: 500,
          height: 500
        }}
        multiple
      >
        <div className="inner-watermark">
          You can drag this text
          <br />
          You can drag this text
          <br />
          You can drag this text
          <br />
          You can drag this text
          <br />
          You can drag this text
          <br />
          You can drag this text
          <br />
          You can drag this text
          <br />
          You can drag this text
        </div>
      </Watermark>
    </div>
  )
}

export default WatermarkPdf;