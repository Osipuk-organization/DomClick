//
//  FlatListCell.swift
//  DomClick
//
//  Created by Максим Сытый on 24.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct FlatListCell: View {
    
    private var item: Int
    
    var body: some View {
        GeometryReader { geo in
            VStack {
                self.imageBlock(geo)
                self.bottomBlock
            }
                .background(Color.white)
                .cornerRadius(20)
        }
            .frame(height: 226)
    }
    
    private func imageBlock(_ geo: GeometryProxy) -> some View {
        ZStack {
            Image("ExampleFlat")
                .resizable()
                .frame(width: geo.size.width, height: 160)
            
            VStack {
                Spacer()
            Text("Садоводческая набережна 13/121")
                .font(Font.system(size: 16))
                .fontWeight(.medium)
                .foregroundColor(.white)
                .padding(.horizontal, 16)
                .padding(.bottom, 12)
            }
                .frame(maxWidth: .infinity, alignment: .bottomLeading)
        } //ZStack
    }
    
    private var bottomBlock: some View {
        HStack {
            VStack(alignment: .leading) {
                Text("415 555 555 ₽")
                    .font(Font.system(size: 16))
                    .fontWeight(.medium)
                    .multilineTextAlignment(.leading)
                Text("\(item)")
                    .font(Font.system(size: 14))
                    .fontWeight(.regular)
                    .multilineTextAlignment(.leading)
            } //VStack
            Spacer()
            Image(systemName: "heart")
                .frame(width: 24, height: 24, alignment: .center)
        } //HStack
            .padding(.horizontal, 16)
            .padding(.bottom, 10)
            .padding(.top, 8.5)
    }
    
    init(_ model: Int) {
        item = model
    }
}

struct FlatListCell_Previews: PreviewProvider {
    static var previews: some View {
        VStack {
            FlatListCell(11)
        }
            .background(Color.gray)
    }
}
