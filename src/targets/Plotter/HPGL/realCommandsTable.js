/*
 realCommandsTable.js - ESP3D WebUI helpers file

 Copyright (c) 2021 Luc LEBOSSE. All rights reserved.
 
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

const realCommandsTable = [
    { name: "ESC.B", value: "\u001b.B", notprintable: true },
    { name: "ESC.K", value: "\u001b.K", notprintable: true },
    { name: "ESC.I", value: "\u001b.I", notprintable: true },
    { name: "ESC.L", value: "\u001b.L", notprintable: true },
    { name: "ESC.O", value: "\u001b.O", notprintable: true },
    { name: "ESC.E", value: "\u001b.E", notprintable: true }
]

export default realCommandsTable
