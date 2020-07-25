//
//  ColorExt.swift
//  DomClick
//
//  Created by Максим Сытый on 25.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

extension Color {
    
    init(dRed: Int, green: Int, blue: Int) {
        self.init(
            red: Double(dRed) / 255,
            green: Double(green) / 255,
            blue: Double(blue) / 255)
    }
}
