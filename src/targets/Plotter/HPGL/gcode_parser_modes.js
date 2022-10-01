/*
 filters.js - ESP3D WebUI helper file

 Copyright (c) 2020 Luc Lebosse. All rights reserved.

 This code is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.

 This code is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public
 License along with This code; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
import { h } from "preact"
const gcode_parser_modes = [
    {
        id: "motion_mode",
        values: [
            "PU;",
            "PD;",

        ],
        label: "CN200",
    },
    {
        id: "coordinate_system_select",
        values: [
            "PA;",
            "PR;"
        ],
        label: "CN201",
    },

    {
        id: "arc_shapes",
        values: [
            "AA;",
            "AR;"
        ],
        label: "CN202",
    },
    {
        id: "circle_command",
        values: [
            "CI;"
        ],
        label: "CN203",
    },
    {
        id: "text_plot_commands",
        values: [
            "CP;",
            "CS;",
            "DI;",
            "DR;",
            "DT;",
            "SA;",
            "SI;",
            "SL;",
            "SM;",
            "SR;",
            "SS;",
            "UC;",
        ],
        label: "CN204",
    },
    {
        id: "tick_commands",
        values: [
            "TL;",
            "XT;",
            "YT;",
        ],
        label: "CN205",
    },
    {
        id: "digitize_commands",
        values: [
            "DC;",
            "DP;",
        ],
        label: "CN206",
    },
    {
        id: "rectangle_shape",
        values: [
            "EA;",
            "ER;",
            "RA;",
        ],
        label: "CN207",
    },
    {
        id: "wedge_shape",
        values: [
            "EW;",
            "WG:",
        ],
        label: "CN208",
    },

    {
        id: "scaling",
        values: ["IP;", "IW;"],
        label: "CN209"
    },
    {
        id: "control_mode",
        values: ["IN;", "DF;", "IM;"],
        label: "CN210",
    },

    { id: "SP", pre: "SP", post: ";", label: "CN210" },
    { id: "VS", pre: "VS", post: ";", label: "CN211" },
    { id: "FS", pre: "FS", post: ";", label: "CN212" },

    {
        id: "output_commands",
        values: [
            "OA;",
            "OC;",
            "OD;",
            "OE;",
            "OF;",
            "OH;",
            "OI;",
            "OO;",
            "OP;",
            "OS;",
            "OW;"

        ],
        label: "CN220",
    },
    {
        id: "realtime_commands",
        values: [
            "ESC.Y",
            "ESC.B",
            "ESC.E",
            "ESC.H",
            "ESC.I",
            "ESC.J",
            "ESC.K",
            "ESC.N",
            "ESC.O",
            "ESC.R",
        ],
        label: "CN221",
    },

]

export { gcode_parser_modes }
