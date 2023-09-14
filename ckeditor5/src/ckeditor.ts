/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image } from '@ckeditor/ckeditor5-image';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Table } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		Bold,
		CloudServices,
		Essentials,
		ExportPdf,
		ExportWord,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Heading,
		Image,
		Italic,
		Link,
		LinkImage,
		Paragraph,
		Subscript,
		Superscript,
		Table,
		TextTransformation,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'bold',
				'italic',
				'underline',
				'alignment',
				'superscript',
				'subscript',
				'fontFamily',
				'fontColor',
				'fontBackgroundColor',
				'link',
				'exportWord',
				'heading',
				'insertTable',
				'undo',
				'redo'
			]
		},
		language: 'en'
	};
}

export default Editor;
