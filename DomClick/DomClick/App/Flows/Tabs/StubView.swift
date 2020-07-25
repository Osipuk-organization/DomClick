//
//  StubView.swift
//  DomClick
//
//  Created by Максим Сытый on 25.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct StubView: View {
    
    private let txt: String
    
    var body: some View {
        Text("Hello! \(txt)")
    }
    
    init(_ testTxt: String) {
        txt = testTxt
    }
}

struct StubView_Previews: PreviewProvider {
    static var previews: some View {
        StubView("People!")
    }
}
