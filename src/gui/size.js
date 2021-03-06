import {assertMainOrNode} from "../api/Env"
assertMainOrNode()

export const size = {
	icon_size_large: 24,
	icon_size_medium: 16,

	hpad_small: 5,
	hpad: 10,
	hpad_medium: 20,
	hpad_large: 20,
	hpad_large_mobile: 6,
	hpad_button: 6,
	hpad_nav_button: 9, // 6 + 9 = 15px

	vpad_xs: 3,
	vpad: 16,
	vpad_small: 8,
	vpad_large: 32,
	vpad_xl: 48,

	text_bubble_tpad: 20,

	border_radius: 3,
	border_selection: 3,

	font_size_base: 16,
	font_size_small: 12,

	button_height: 44,
	button_height_bubble: 30,
	button_icon_bg_size: 32,
	button_floating_size: 56,

	navbar_height: 70,
	navbar_height_mobile: 44,

	navbar_button_width: 80,
	navbar_edge_width_mobile: 82,

	text_field_label_top: 21,

	header_logo_height: 38,
	header_logo_height_mobile: 32,

	desktop_layout_width: 720,

	list_row_height: 68,

	column_width_s_desktop: 135,
	column_width_s_mobile: 70,
}


export function px(value: number): string {
	return value + 'px'
}