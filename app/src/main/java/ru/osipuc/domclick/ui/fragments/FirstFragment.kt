package ru.osipuc.domclick.ui.fragments

import androidx.fragment.app.Fragment
import kotlinx.android.synthetic.main.fragment_first.*
import ru.osipuc.domclick.R
import ru.osipuc.domclick.utilites.replaceFragment


class FirstFragment : Fragment(R.layout.fragment_first) {

    override fun onResume() {
        super.onResume()
        first_fragment_reg_btn.setOnClickListener {
            replaceFragment(RegistrationFragment())
        }
    }

}