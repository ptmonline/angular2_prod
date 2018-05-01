import { DefaultPipe } from "./defaultpipe.component";
import { Pipe } from "@angular/core";

describe('testing Pipe', ()=>{
    let pipe: DefaultPipe;

    beforeEach(()=>{
        pipe = new DefaultPipe();
    })

    it('should return something',()=>{
        expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
    })

    it('should return secure https', ()=>{
        expect(pipe.transform('', 'http://place-hold.it/300', true)).toBe('https://place-hold.it/300');
    })
})