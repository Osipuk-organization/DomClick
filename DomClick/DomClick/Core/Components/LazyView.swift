//
//  LazyView.swift
//  DomClick
//
//  Created by Максим Сытый on 23.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct LazyView<Content: View>: View {
    
    let build: () -> Content
    
    init(_ build: @autoclosure @escaping () -> Content) {
        self.build = build
    }
    
    var body: Content {
        build()
    }
}
