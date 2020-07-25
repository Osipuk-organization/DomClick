//
//  DetailFlat.swift
//  DomClick
//
//  Created by Максим Сытый on 23.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct DetailFlat: View {
    
    var flat: Int
    
    @State private var isSelected: Int?
    
    var body: some View {
        VStack(spacing: 0) {
            img
            info
            management
            Spacer()
        }
            .navigationBarItems(leading: Text(" "),
                                trailing: rightNavBtn)
    }
    
    private var rightNavBtn: some View {
        Button(action: {
            
        }) {
            Image(systemName: "person.fill")
        }
            .buttonStyle(PlainButtonStyle())
    }
    
    private var img: some View {
        ZStack {
            Image("ExampleFlat")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(maxWidth: .infinity)
                .frame(height: 280)
        }
    }
    
    private var info: some View {
        HStack {
            VStack(alignment: .leading) {
                Text("415 555 555 ₽")
                    .font(Font.system(size: 16))
                    .fontWeight(.medium)
                    .multilineTextAlignment(.leading)
                Text("\(flat)")
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
    
    private var management: some View {
        List {
            cell(imgName: "bed.double",
                 mTxt: "Мебель в квартире",
                 sTxt: "Есть")
            
            cell(imgName: "wand.and.rays",
                 mTxt: "Ремонт",
                 sTxt: "Евро")
            
            cell(imgName: "rectangle.split.3x1",
                 mTxt: "Балкон",
                 sTxt: "2")
            
            NavigationLink(
                destination: LazyView(StubView("Show Flat"))
                    .navigationBarTitle("", displayMode: .inline),
                tag: 1,
                selection: $isSelected) {
                    
                    cell(imgName: "",
                         mTxt: "Просмотры")
                    
            } //NavigationLink
                .buttonStyle(PlainButtonStyle())
        }
    }
    
    private func cell(imgName: String,
                      mTxt: String,
                      sTxt: String = "") -> some View {
        HStack {
            Image(systemName: imgName)
            Text(mTxt)
            Spacer()
            Text(sTxt)
        }
    }
}

struct DetailFlat_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            DetailFlat(flat: 11)
        }
    }
}
