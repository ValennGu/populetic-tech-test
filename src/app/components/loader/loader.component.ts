import { Component, OnInit, Input } from '@angular/core';
import { LoaderType } from 'src/app/models/utils.model';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    @Input() loaderType: LoaderType;

    constructor() { }

    ngOnInit(): void {
    }

}
