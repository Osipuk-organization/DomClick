//
//  ListFlats.swift
//  DomClick
//
//  Created by Максим Сытый on 23.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct ListFlats: View {
    
    private let list: [Int] = Array(1...22)
    
    @State private var isSelect: Int?
    @State private var isModalPresent: Bool = false
    
    var body: some View {
        ScrollView {
            VStack {
                ForEach(list, id: \.self) { it in
                    self.createCellBox(it)
                        .padding(.horizontal, 16)
                }
            }
        } //ScrollView
            .background(Color(dRed: 220, green: 220, blue: 220))
    }
    
    private func createCellBox(_ model: Int) -> some View {
        
        NavigationLink(
            destination: LazyView(DetailFlat(flat: model))
                .navigationBarTitle("", displayMode: .inline),
            tag: model,
            selection: $isSelect) {
                
                FlatListCell(model)
                
        } //NavigationLink
            .buttonStyle(PlainButtonStyle())
    }
}

struct ListFlats_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ListFlats()
        }
    }
}
