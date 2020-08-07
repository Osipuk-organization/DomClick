package ru.osipuc.domclick.ui.fragments

import android.view.View
import androidx.fragment.app.Fragment
import kotlinx.android.synthetic.main.fragment_registration.*
import ru.osipuc.domclick.R

class RegistrationFragment : Fragment(R.layout.fragment_registration) {

    override fun onStart() {
        super.onStart()
        registration_fragment_edit_text.setOnFocusChangeListener { v, hasFocus ->
            if (hasFocus) {
                buttonGoogle.visibility = View.GONE
                registration_fragment_or_phone_text.visibility = View.GONE
                registration_fragment_conditions.visibility = View.GONE
                registration_fragment_reg_btn.text = getString(R.string.confirm)
            }
        }

        registration_fragment_reg_btn.setOnClickListener {

        }
    }

}